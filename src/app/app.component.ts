import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'こんにちは！';
	key = '数値の5倍';
	value = 0;
	dataArray = [
		'1a', '2b', '3c', '4d', '5e', '6f', '7g', '8h', '9i', '10j',
		'11k', '12l', '13m', '14n', '15o', '16p', '17q', '18r', '19s', '20t',
		'21u', '22v', '23w', '24x', '25y', '26z'
	];
}
