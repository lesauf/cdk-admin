import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatRouterModule } from './chat.router';
// import * as hljs from 'highlight.js';
import * as hljs from "highlight.js/lib/core";  // require only the core library
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
// import * as hljsTypescript  require('highlight.js/lib/languages/typescript');
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NoticeComponent } from './notice/notice.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChatsService } from './chats.service';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// export function highlightJsFactory(): any {
//   hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
//   return hljs;
// }

@NgModule({
  imports: [
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  PerfectScrollbarModule,
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  HighlightModule,
  ChatRouterModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  AngularFireDatabaseModule,
  ],
  declarations: [
      ChatComponent,
      ChatListComponent,
      ContactsComponent,
      NoticeComponent,
  ],
  exports: [
  ],
  entryComponents: [
      NoticeComponent
  ],
  providers: [
    {
      provide: 'ChatsService', useClass: ChatsService
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript')
        }
      }
    }
  ],

})
export class ChatsModule { }


