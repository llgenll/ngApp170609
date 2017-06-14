import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App Sample';
	sample01Value = 0;
	sample02Value = false;
	sample03Value = 'apple';
	sample04Value = 'http://www.dunksoft.com/';
	sample04Flag = true;
	sample04Classes = {
		sample04Red:false,
		sample04Green:true,
		sample04Large:true
	};
	sample04Font = 'MS Gothic';
	sample04Stiles = {
		'font-family':'Arial',
		'font-weight':'bolder',
		'text-indent':'1em'
	};
	dataArray = [
		'1a', '2b', '3c', '4d', '5e'
	];
}
