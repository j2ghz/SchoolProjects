import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../../bike';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BikeService }  from '../bike.service';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {

  getBike(): void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.bikeService.getBike(id).subscribe(bike => this.bike = bike);
  }
  @Input() bike: Bike;

  constructor(
    private route: ActivatedRoute,
    private bikeService: BikeService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getBike();
  }

}
