import CMS from 'netlify-cms-app';

import HomepagePreview from './pages/HomepagePreview';
import PagePreview from './pages/PagePreview';

CMS.init();

CMS.registerPreviewStyle('../main.css');

CMS.registerPreviewTemplate('_index', HomepagePreview);
CMS.registerPreviewTemplate('pages', PagePreview);
