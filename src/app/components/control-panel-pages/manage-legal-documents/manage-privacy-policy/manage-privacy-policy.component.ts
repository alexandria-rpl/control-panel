import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-classic';
import {SimpleContent} from '../../../../controllers/content/simple-content';
import {SimpleContentService} from '../../../../services/content-management-service/simple-content.service';

@Component({
  selector: 'app-manage-privacy-policy',
  templateUrl: './manage-privacy-policy.component.html',
  styleUrls: ['./manage-privacy-policy.component.scss']
})
export class ManagePrivacyPolicyComponent implements OnInit {

  Mode: string; // Modes: Previewing || Editing
  documentName: string;
  privacyPolicy: SimpleContent;

  public Editor = DecoupledEditor;
  public model = {
    editorData: ''
  };

  constructor(private simpleContentService: SimpleContentService) { }

  ngOnInit() {
    this.Mode = 'Previewing';
    this.documentName = 'PrivacyPolicy';

    this.getPrivacyPolicyDocument();
  }

  showEditMode() {
    this.Mode = 'Editing';
    this.model = {
      editorData: this.privacyPolicy.documentContent.toString()
    };
  }

  showPreviewMode() {
    this.Mode = 'Previewing';
  }

  getPrivacyPolicyDocument() {
    this.simpleContentService.getSimpleContentByDocumentName(this.documentName)
      .subscribe(
        (results: SimpleContent) => {
          this.privacyPolicy = results;
          console.log(this.privacyPolicy);
        },
        (error) => console.log(error)
      );
  }
}
