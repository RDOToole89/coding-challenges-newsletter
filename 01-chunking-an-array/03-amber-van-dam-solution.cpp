// Solution submitted by Amber van Dam using C++ 

#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> chunkedVector(vector<int> v, int chunk) {
    vector<vector<int>> ret;
    for (int i = 0; i < v.size(); i++) {
        vector<int> newV;
        for (int j = 0; j < chunk && j + i < v.size(); j++) {
            newV.push_back(v[i + j]);
        }
        i = i + chunk - 1;
        ret.push_back(newV);
    }
    return ret;
}




