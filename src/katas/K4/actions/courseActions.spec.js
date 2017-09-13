import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as courseActions from './courseActions';
import * as asyncActions from './asyncActions';
import * as types from './actionTypes';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('courseActions', ()=>{
  afterEach(()=>{
    nock.cleanAll();
  });
  it('Should fetch courses from server', (done)=>{
    /* ------------below is an example of call to nock ------------ */
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{id: 1, firstName: 'Cory', lastName: 'House'}] }});
    /* -------nock will block the http request and mock the http response --- */
    // const expectedActions = [
    //   {type: types.ASYNC_START},
    //   {type: types.LOAD_COURSES_SUCCESS}
    // ];
    // const store = mockStore({courses:[]}, expectedActions);
    const store = mockStore({});
    return store.dispatch(courseActions.loadCourses())
      .then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual(asyncActions.asyncStart());
        expect(actions[1]).toEqual(asyncActions.asyncComplete());
        expect(actions[2].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
      });
  });
});
