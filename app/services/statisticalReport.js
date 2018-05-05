import api from '../utils/request';
export function reportProjects(params,callback) {
  return api('report/projects', {
    params: JSON.stringify(params)
  },callback);
}//小区下拉

export function reportRatio(params,callback) {
  return api('report/ratio', {
    params: JSON.stringify(params)
  },callback);
}

export function reportLineChart(params,callback) {
  return api('report/lineChart', {
    params: JSON.stringify(params)
  },callback);
}

export function reportHistogram(params,callback) {
    return api('report/histogram', {
      params: JSON.stringify(params)
    },callback);
  }

export function reportCost(params,callback) {
  return api('repair/cost', {
    params: JSON.stringify(params)
  },callback);
}
