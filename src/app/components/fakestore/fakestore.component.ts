import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FakestoreApiService } from 'src/app/services/fakestore-api.service';

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakestoreComponent {

  data: any[] = [];  // For storing products
  userInputForm: FormGroup;

  constructor(private fakestoreApi: FakestoreApiService) {
    this.userInputForm = new FormGroup({
      userInput: new FormControl(5) // Default product limit
    });
  }

  updateDataCount() {
    this.getData();
  }

  getData() {
    const limit = this.userInputForm.value.userInput;

    this.fakestoreApi.getProducts(limit)
      .subscribe((response) => {
        this.data = response;
      });
  }

}
