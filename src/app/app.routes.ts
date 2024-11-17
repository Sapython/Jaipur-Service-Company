import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'get-started',
    loadComponent: () => import('./get-started/get-started.page').then( m => m.GetStartedPage)
  },
  {
    path: 'language',
    loadComponent: () => import('./language/language.page').then( m => m.LanguagePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'otp',
    loadComponent: () => import('./otp/otp.page').then( m => m.OtpPage)
  },
  {
    path: 'job-details',
    loadComponent: () => import('./job-details/job-details.page').then( m => m.JobDetailsPage)
  },
  {
    path: 'take-selfie',
    loadComponent: () => import('./take-selfie/take-selfie.page').then( m => m.TakeSelfiePage)
  },
  {
    path: 'invoice',
    loadComponent: () => import('./invoice/invoice.page').then( m => m.InvoicePage)
  },
  {
    path: 'end-job',
    loadComponent: () => import('./end-job/end-job.page').then( m => m.EndJobPage)
  },
  {
    path: 'completed-job',
    loadComponent: () => import('./completed-job/completed-job.page').then( m => m.CompletedJobPage)
  },
  {
    path: 'sidebar',
    loadComponent: () => import('./sidebar/sidebar.page').then( m => m.SidebarPage)
  },
  {
    path: 'job-history',
    loadComponent: () => import('./job-history/job-history.page').then( m => m.JobHistoryPage)
  },
  {
    path: 'financial-details',
    loadComponent: () => import('./financial-details/financial-details.page').then( m => m.FinancialDetailsPage)
  },
  {
    path: 'add-gst',
    loadComponent: () => import('./add-gst/add-gst.page').then( m => m.AddGstPage)
  },
  {
    path: 'edit-pan',
    loadComponent: () => import('./edit-pan/edit-pan.page').then( m => m.EditPanPage)
  },
  {
    path: 'edit-bank',
    loadComponent: () => import('./edit-bank/edit-bank.page').then( m => m.EditBankPage)
  },
  {
    path: 'edit-profile',
    loadComponent: () => import('./edit-profile/edit-profile.page').then( m => m.EditProfilePage)
  },
  {
    path: 'identity-verification',
    loadComponent: () => import('./identity-verification/identity-verification.page').then( m => m.IdentityVerificationPage)
  },
  {
    path: 'identity-section',
    loadComponent: () => import('./identity-section/identity-section.page').then( m => m.IdentitySectionPage)
  },
  {
    path: 'award-certifcate',
    loadComponent: () => import('./award-certifcate/award-certifcate.page').then( m => m.AwardCertifcatePage)
  },
  {
    path: 'award-certifcate',
    loadComponent: () => import('./award-certifcate/award-certifcate.page').then( m => m.AwardCertifcatePage)
  },




];
