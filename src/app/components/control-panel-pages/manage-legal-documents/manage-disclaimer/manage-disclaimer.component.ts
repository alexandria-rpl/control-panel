import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-classic';
import {SimpleContent} from '../../../../controllers/content/simple-content';
import {SimpleContentService} from '../../../../services/content-management-service/simple-content.service';

@Component({
  selector: 'app-manage-disclaimer',
  templateUrl: './manage-disclaimer.component.html',
  styleUrls: ['./manage-disclaimer.component.scss']
})
export class ManageDisclaimerComponent implements OnInit {

  Mode: string;  // Modes: Previewing | Editing
  documentName: string;
  disclaimer: SimpleContent;

  public Editor = DecoupledEditor;
  public model = {
    editorData: ''
  };

  constructor(private simpleContentService: SimpleContentService) {}


  ngOnInit() {
    this.Mode = 'Previewing';
    this.documentName = 'Disclaimer';

    this.getDisclaimerDocument();
  }

  showEditMode() {
    this.Mode = 'Editing';
    this.model = {
      editorData: this.disclaimer.documentContent.toString()
    };
  }

  showPreviewMode() {
    this.Mode = 'Previewing';
  }


  getDisclaimerDocument() {
    this.simpleContentService.getSimpleContentByDocumentName(this.documentName)
      .subscribe(
        (results: SimpleContent) => {
          this.disclaimer = results;
          console.log(this.disclaimer);
        },
        (error) => console.log(error)
      );
  }

}
