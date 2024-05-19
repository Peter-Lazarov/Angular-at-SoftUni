import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {
  experimentResult: number = 0;

  complexExperimentResult: string = '';

  ngOnInit(): void {
    this.experiment();
    this.complexExperiment();
  }

  experiment(): void {
    //1
    //const sum = [10, 20, 30].reduce((growing, current) => growing + current, 0);
    //console.log({sum}); //60

    //2
    //const reducer = (growing: number, current: number) => growing + current;
    //const sum = [10, 20, 30].reduce(reducer, 0);
    //console.log({sum}); //60

    //3
    const reducer = (growing: number, current: number) => growing + current;
    const eventCollection = [10, 20, 30];
    const initialState = 0;

    const result = eventCollection.reduce(reducer, initialState);
    console.log({ result });
    this.experimentResult = result;

  }

  complexExperiment(): void {
    interface ApplicationState {
      message: string;
      person: Object;
      isAuthenticated: boolean;
    }

    const initialState: ApplicationState = {
      message: '',
      person: {},
      isAuthenticated: false
    }

    const ACTION_1 = 'We are going to plant a tree';
    const ACTION_2 = { name: 'Peter', skill: 'good' };
    const ACTION_3 = true;

    const reducer = (state: ApplicationState, action: any) => {
      switch (action.type) {
        case ACTION_1:
          return { ...state, message: action.value };
        case ACTION_2:
          return { ...state, person: action.value };
        case ACTION_3:
          return { ...state, isAuthenticated: action.value };
        default:
          return state;
      }
    }

    const eventCollection = [
      { type: ACTION_1, value: 'We are going to plant a tree' },
      { type: ACTION_2, value: { name: 'Peter', skill: 'good' } },
      { type: ACTION_3, value: true }
    ];

    const result = eventCollection.reduce(reducer, initialState);
    console.log({result});
    this.complexExperimentResult = JSON.stringify(result, null, 2);
    
  }
}
