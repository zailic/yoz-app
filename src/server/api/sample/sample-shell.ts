import {SampleController} from './sample-controller';
export function sampleApi(app) {
  var ctrl = new SampleController();
  var apiUrl = '/api/sample';
  app.get(apiUrl, ctrl.get);
  app.put(`${apiUrl}/:id`, ctrl.put);
  app.post(apiUrl, ctrl.post);
  app.delete(`${apiUrl}/:id`, ctrl.delete);
}