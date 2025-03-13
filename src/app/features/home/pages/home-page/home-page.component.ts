import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MusicCardComponent } from '../../../../shared/components/ui/music-card/music-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MusicCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  // Datos de ejemplo para la maquetación
  featuredPlaylists = [
    {
      id: 1,
      name: 'Éxitos de Hoy',
      cover: 'https://picsum.photos/300',
      description: 'Los éxitos más escuchados ahora',
    },
    {
      id: 2,
      name: 'Clásicos del Rock',
      cover: 'https://picsum.photos/300',
      description: 'Lo mejor del rock de todos los tiempos',
    },
    {
      id: 3,
      name: 'Electrónica Top',
      cover: 'https://picsum.photos/300',
      description: 'La mejor selección de música electrónica',
    },
    {
      id: 4,
      name: 'Indie Hits',
      cover: 'https://picsum.photos/300',
      description: 'Descubre nuevos artistas indie',
    },
    {
      id: 5,
      name: 'Relax & Chill',
      cover: 'https://picsum.photos/300',
      description: 'Música para relajarse',
    },
  ];

  newReleases = [
    {
      id: 1,
      name: 'Future Nostalgia',
      artist: 'Dua Lipa',
      cover: 'https://picsum.photos/300',
    },
    {
      id: 2,
      name: 'After Hours',
      artist: 'The Weeknd',
      cover: 'https://picsum.photos/300',
    },
    {
      id: 3,
      name: 'Happier Than Ever',
      artist: 'Billie Eilish',
      cover: 'https://picsum.photos/300',
    },
    {
      id: 4,
      name: 'Justice',
      artist: 'Justin Bieber',
      cover: 'https://picsum.photos/300',
    },
    {
      id: 5,
      name: 'SOUR',
      artist: 'Olivia Rodrigo',
      cover: 'https://picsum.photos/300',
    },
  ];

  popularArtists = [
    { id: 1, name: 'Bad Bunny', cover: 'https://picsum.photos/300' },
    { id: 2, name: 'Taylor Swift', cover: 'https://picsum.photos/300' },
    { id: 3, name: 'Drake', cover: 'https://picsum.photos/300' },
    { id: 4, name: 'Ariana Grande', cover: 'https://picsum.photos/300' },
    { id: 5, name: 'BTS', cover: 'https://picsum.photos/300' },
  ];
}
