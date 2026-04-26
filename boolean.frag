float opeUnion(float s0, float s1){
    return min(s1 , s0);
}

float opeIntersection(float s0, float s1){
    return abs(s0 + s1);
}

float opeSubstraction(float s0, float s1){
    return max(0.0, s0 - s1);
}

float opeExclusion(float s0, float s1){
    return max(s0 , s1);
}