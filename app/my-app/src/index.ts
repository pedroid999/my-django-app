import { MyModel } from './models/MyModel';
import { MyModelListView } from './views/MyModelListView';

// Create some instances of MyModel
let myModel1 = new MyModel(1, 'Model 1');
let myModel2 = new MyModel(2, 'Model 2');

// Create an array of MyModel instances
let myModels = [myModel1, myModel2];

// Create an instance of MyModelListView
let myModelListView = new MyModelListView();

// Render the list of MyModel instances
myModelListView.render(myModels);