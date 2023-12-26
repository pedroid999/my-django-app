import { MyModel } from '../models/MyModel';

export class MyModelListView {
  private models: MyModel[];

  constructor(models: MyModel[]) {
    this.models = models;
  }

  render() {
    this.models.forEach(model => {
      console.log(`ID: ${model.id}, Name: ${model.name}`);
    });
  }
}