import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-music-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.css',
})
export class MusicCardComponent {
  @Input() item: any;
  @Input() type: 'playlist' | 'album' | 'artist' = 'playlist';
}
