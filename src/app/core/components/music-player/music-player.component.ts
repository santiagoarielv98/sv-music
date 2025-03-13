import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-music-player',
  imports: [
    MatToolbar,
    MatCardModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss',
  standalone: true,
})
export class MusicPlayerComponent {}
