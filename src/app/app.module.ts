/* tslint:disable:max-line-length */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpModule } from '@angular/http';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

/* Site Components Goes Here */
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CallbackComponent } from './components/callback/callback.component';

/* Site Modal Components */
import { ModalComponent } from './modals/modal/modal.component';
import { ModalCancelComponent } from './modals/modal-cancel/modal-cancel.component';
import { ModalConfirmComponent } from './modals/modal-confirm/modal-confirm.component';
import { ModalOkComponent } from './modals/modal-ok/modal-ok.component';
import { ModalOkCancelComponent } from './modals/modal-ok-cancel/modal-ok-cancel.component';
import { ModalVanillaComponent } from './modals/modal-vanilla/modal-vanilla.component';

/* Site Modal Templates */
import { DeleteConfirmationComponent } from './components/modal-templates/delete-confirmation/delete-confirmation.component';
import { ErrorMessageComponent } from './components/modal-templates/error-message/error-message.component';
import { LightboxComponent } from './components/modal-templates/lightbox/lightbox.component';
import { LoginComponent } from './components/modal-templates/login/login.component';
import { LogoutComponent } from './components/modal-templates/logout/logout.component';
import { ReadMessageComponent } from './components/modal-templates/read-message/read-message.component';
import { SendMessageComponent } from './components/modal-templates/send-message/send-message.component';

/* Services */
import { ModalCommunicationService } from './services/modal-communication-service/modal-communication.service';
import { ComponentCommunicationService } from './services/component-communication-service/component-communication.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ThreeDimensionalPrintingColorsComponent } from './components/control-panel-pages/three-dimensional-printing-colors/three-dimensional-printing-colors.component';
import {ThreeDimensionalPrintingManagementComponent} from './components/control-panel-pages/three-dimensional-printing-management/three-dimensional-printing-management.component';
import { ThreeDimensionalPrintingFormComponent } from './components/control-panel-pages/three-dimensional-printing-form/three-dimensional-printing-form.component';
import {ThreeDimensionalPrintingForm} from './interfaces/library-forms/three-dimensional-printing-form';
import { RoleManagementComponent } from './components/control-panel-pages/role-management/role-management.component';
import { ManageUserGroupsComponent } from './components/control-panel-pages/manage-user-groups/manage-user-groups.component';
import { ManageUsersComponent } from './components/control-panel-pages/manage-users/manage-users.component';
import { ManagePrivilegesComponent } from './components/control-panel-pages/manage-privileges/manage-privileges.component';
import { ManageRolesComponent } from './components/control-panel-pages/manage-roles/manage-roles.component';
import { ManageMenuItemsComponent } from './components/control-panel-pages/manage-menu-items/manage-menu-items.component';
import { ManageMenuGroupsComponent } from './components/control-panel-pages/manage-menu-groups/manage-menu-groups.component';
import { ManageMenuContainersComponent } from './components/control-panel-pages/manage-menu-containers/manage-menu-containers.component';
import { ManageMenusComponent } from './components/control-panel-pages/manage-menus/manage-menus.component';
import { ManageBranchesComponent } from './components/control-panel-pages/manage-branches/manage-branches.component';
import { ManageCustomUsersComponent } from './components/control-panel-pages/manage-custom-users/manage-custom-users.component';
import { ControlPanelHomeComponent } from './components/control-panel-pages/control-panel-home/control-panel-home.component';
import { ManageCustomUserMenuItemsComponent } from './components/control-panel-pages/manage-custom-user-menu-items/manage-custom-user-menu-items.component';
import { ManageGroupRolesComponent } from './components/control-panel-pages/manage-group-roles/manage-group-roles.component';
import { ManageGroupPrivilegesComponent } from './components/control-panel-pages/manage-group-privileges/manage-group-privileges.component';
import { ManageGroupMembersComponent } from './components/control-panel-pages/manage-group-members/manage-group-members.component';
import { ManageCustomUserPrivilegesComponent } from './components/control-panel-pages/manage-custom-user-privileges/manage-custom-user-privileges.component';

/* Router Linkage Goes Here */
const appRoutes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'control-panel', component: ControlPanelHomeComponent, data: { title: 'Rapides Parish Library'} },
  { path: 'control-panel/printing-management/3D-printing-color-management', component: ThreeDimensionalPrintingColorsComponent },
  { path: 'control-panel/printing-management/3D-printing-management', component: ThreeDimensionalPrintingColorsComponent },
  { path: 'control-panel/printing-management/3D-printing-form', component: ThreeDimensionalPrintingForm },
  { path: 'control-panel/control-panel-access/role-management', component: RoleManagementComponent },
  { path: 'control-panel/control-panel-access/user-group-management', component: ManageUserGroupsComponent },
  { path: 'control-panel/control-panel-access/user-management', component: ManageUsersComponent },
  { path: 'control-panel/control-panel-access/privileges-management', component: ManagePrivilegesComponent },
  { path: 'control-panel/control-panel-access/menu-group-management', component: ManageMenuGroupsComponent },
  { path: 'control-panel/control-panel-access/menu-container-management', component: ManageMenuContainersComponent },
  { path: 'control-panel/control-panel-access/menu-management', component: ManageMenusComponent },
  { path: 'control-panel/control-panel-access/menu-item-management', component: ManageMenuItemsComponent },
  { path: 'control-panel/control-panel-access/branch-management', component: ManageBranchesComponent },
  { path: 'control-panel/control-panel-access/custom-user-management',  component: ManageCustomUsersComponent },
  { path: 'control-panel/control-panel-access/custom-user-menu-item-management', component: ManageCustomUserMenuItemsComponent },
  { path: 'control-panel/control-panel-access/custom-user-privilege-management', component: ManageCustomUserPrivilegesComponent },
  { path: 'control-panel/control-panel-access/group-role-management', component: ManageGroupRolesComponent },
  { path: 'control-panel/control-panel-access/group-privilege-management', component: ManageGroupPrivilegesComponent },
  { path: 'control-panel/control-panel-access/group-member-management', component: ManageGroupMembersComponent },
  { path: '', redirectTo: '/control-panel', pathMatch: 'full' },
  { path: 'home', redirectTo: '/control-panel', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CallbackComponent,
    ModalComponent,
    ModalCancelComponent,
    ModalConfirmComponent,
    ModalOkComponent,
    ModalOkCancelComponent,
    ModalVanillaComponent,
    DeleteConfirmationComponent,
    ErrorMessageComponent,
    LightboxComponent,
    LoginComponent,
    LogoutComponent,
    ReadMessageComponent,
    SendMessageComponent,
    ToolbarComponent,
    ThreeDimensionalPrintingColorsComponent,
    ThreeDimensionalPrintingManagementComponent,
    ThreeDimensionalPrintingFormComponent,
    RoleManagementComponent,
    ManageUserGroupsComponent,
    ManageUsersComponent,
    ManagePrivilegesComponent,
    ManageRolesComponent,
    ManageMenuItemsComponent,
    ManageMenuGroupsComponent,
    ManageMenuContainersComponent,
    ManageMenusComponent,
    ManageBranchesComponent,
    ManageCustomUsersComponent,
    ControlPanelHomeComponent,
    ManageCustomUserMenuItemsComponent,
    ManageGroupRolesComponent,
    ManageGroupPrivilegesComponent,
    ManageGroupMembersComponent,
    ManageCustomUserPrivilegesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CKEditorModule,
    HttpModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    FileUploadModule,
    MatMenuModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
  ],
  providers: [
    ComponentCommunicationService,
    ModalCommunicationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteConfirmationComponent,
    ErrorMessageComponent,
    LightboxComponent,
    LoginComponent,
    LogoutComponent,
    ReadMessageComponent,
    SendMessageComponent
  ]
})

export class AppModule {
}
