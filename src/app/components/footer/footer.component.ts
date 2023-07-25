import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  @Output() changePage = new EventEmitter<string>();
  currentPage: string = 'main';

  ngOnInit(): void {}

  handleChangePage(page: string) {
    this.changePage.emit(page);
    this.currentPage = page;
  }
}
