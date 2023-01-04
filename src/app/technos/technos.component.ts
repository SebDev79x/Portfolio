import { Component, OnInit, Input } from '@angular/core';
import { technosData } from '../miscData/technosData';
import { faAngular, faNodeJs, faHtml5, faCss3, faJsSquare, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import { ITechno } from '../_interfaces/itechno';
@Component({
  selector: 'app-technos',
  templateUrl: './technos.component.html',
  styleUrls: ['./technos.component.scss'],
  host: {
    class: "component-height"
  }
})

export class TechnosComponent implements OnInit {
  @Input() title!: string;
  public isActive!: boolean;
  public technos = technosData;
  public allTechnos!: any;
  public icons = [faAngular, faNodeJs, faHtml5, faCss3, faJsSquare, faPhp, faReact,faDatabase];
  public isSelected: boolean = false;
  public dataTechno!: any;
  public chip!: string;
  constructor() { }
  ngOnInit(): void {
    this.addPropIconNames(this.technos, this.icons, 'icon')
    this.allTechnos = this.technos
  }

  /** Ajout paires clé/valeur d'un tableau à chaque objet d'un autre tableau */
  addPropIconNames = (array: any, array2: any, key: string) => {
    return array.map((el: any, i: number) => el[key] = array2[i])
  }
  /** Affiche composant techno-card (enfant) au clic */
  onClickDisplayCard = (techno: any) => {
    techno.selected = !techno.selected
    this.isSelected = true
    // Chaque élément non sélectionné est false
    this.allTechnos.map((element: any) => {
      if (element != techno) {
        element.selected = false
      }
    })
    // Filtre this.allTechnos => renvoie la techno qui n'est pas false
    const selectedChip = this.allTechnos.filter((element: any) => {
      return element.selected != false
    })
    // Si tableau this.allTechnos est vide, isSelected est false
    if (selectedChip.length == 0) {
      this.isSelected = false
    }
    this.onClickGetDataTechno(techno)
  }

  /** Récupère détails d'une techno au clic */
  onClickGetDataTechno = (techno: ITechno) => {
 this.dataTechno = techno


 return this.dataTechno
  }
}
