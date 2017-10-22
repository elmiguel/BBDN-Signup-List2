import { Availability, Enrollment, Locale } from '../shared-model';

export interface CourseState {
  id?: string;
  uuid?: string;
  externalId?: string;
  dataSourceId?: string;
  courseId?: string;
  name?: string;
  description?: string;
  created?: string;
  organization?: boolean;
  ultraStatus?: string;
  allowGuests?: boolean;
  readOnly?: boolean;
  termId?: string;
  availability?: any;
  enrollment?: Enrollment;
  locale?: Locale;
  hasChildren?: boolean;
  parentId?: string;
  externalAccessUrl?: string;
  guestAccessUrl?: string;
}

export const enum UltraStatus {
  Undecided = 'Undecided',
  Classic = 'Classic',
  Ultra = 'Ultra',
  UltraPreview = 'UltraPreview'
}

export const INITIAL_COURSE_STATE: CourseState = {
  externalId: '',
  dataSourceId: '',
  courseId: '',
  name: '',
  description: '',
  created: '',
  organization: false,
  ultraStatus: UltraStatus['Undecided'],
  allowGuests: false,
  readOnly: false,
  termId: '',
  availability: { available: true },
  enrollment: {},
  locale: {},
  hasChildren: false,
  parentId: '',
  externalAccessUrl: '',
  guestAccessUrl: ''
};

