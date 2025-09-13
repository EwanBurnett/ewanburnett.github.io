#version 300 es
precision mediump float;
out vec4 FragColour;

#define DBG_SHOW_SCREEN_UVS 0

const int kMaxSteps=100;
const float kMaxDistance=100.;
const float kEpsilon=.01;
const float kGamma=1./2.2;

uniform float u_time;
uniform vec2 u_resolution;

//-------------------------------

vec3 RayPoint(vec3 origin,vec3 dir,float t){
    return origin+dir*t;
}

//via https://iquilezles.org/articles/distfunctions/
float SDF_Octahedron(vec3 point,float size){
    point=abs(point);
    float m=point.x+point.y+point.z-size;
    vec3 q;
    if(3.*point.x<m)q=point.xyz;
    else if(3.*point.y<m)q=point.yzx;
    else if(3.*point.z<m)q=point.zxy;
    else return m*.57735027;
    
    float k=clamp(.5*(q.z-q.y+size),0.,size);
    return length(vec3(q.x,q.y-size+k,q.z-k));
}

float SDF_Sphere(vec3 point,float radius){
    return length(point)-radius;
}

float Scene(vec3 point){
    float distance=SDF_Sphere(point+vec3(0.,sin(u_time),0.),1.);//SDF_Octahedron(point, 1.0);
    return distance;
}

vec3 GetNormal(vec3 point){
    float center=Scene(point);
    float dX=Scene(point+vec3(kEpsilon,0.,0.));
    float dY=Scene(point+vec3(0.,kEpsilon,0.));
    float dZ=Scene(point+vec3(0.,0.,kEpsilon));
    
    return(vec3(dX,dY,dZ)-center)/kEpsilon;
}

float RayMarch(vec3 origin,vec3 direction){
    
    float t=0.;
    
    for(int i=0;i<kMaxSteps;i++){
        
        //Sample the scene using our ray.
        vec3 p=RayPoint(origin,direction,t);
        float s=Scene(p);
        
        t+=s;
        
        //Return intersections.
        if(s<kEpsilon){
            return t;
        }
        if(t>kMaxDistance){
            break;
        }
    }
    
    return kMaxDistance;
}

vec3 GammaCorrect(in vec3 colour){
    return pow(colour,vec3(kGamma));
}

void main(){
    vec2 uv=gl_FragCoord.xy/u_resolution.xy;
    uv-=.5;
    uv.x*=u_resolution.x/u_resolution.y;
    
    #if DBG_SHOW_SCREEN_UVS
    FragColour=vec4(uv.xy,0.,1.);
    #else
    
    //Create the Ray
    vec3 rayOrigin=vec3(0.,0.,3.);
    vec3 rayDirection=normalize(vec3(uv.xy,-1.));
    
    //Ray March
    float t=RayMarch(rayOrigin,rayDirection);
    
    //Apply Shading
    vec4 colour=vec4(0.);
    vec3 objectColour=vec3(1.,0.,0.);
    
    vec4 lightColour=vec4(1.,1.,1.,1.);
    vec3 lightDirection=vec3(.8,.5,1.);
    
    if(t<kMaxDistance){
        vec3 toLight=normalize(lightDirection);
        vec3 normal=GetNormal(RayPoint(rayOrigin,rayDirection,t));
        float n_dot_l=max(0.,dot(normal,toLight));
        
        colour.rgb=objectColour*n_dot_l;
        colour.a=1.;
    }
    
    colour.rgb=GammaCorrect(colour.rgb);
    
    FragColour=vec4(colour);
    #endif
}
