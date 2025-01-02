/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    pages: Page;
    legal: Legal;
    media: Media;
    clubs: Club;
    resources: Resource;
    'club-tag-categories': ClubTagCategory;
    'resource-tag-categories': ResourceTagCategory;
    'club-tags': ClubTag;
    'resource-tags': ResourceTag;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    legal: LegalSelect<false> | LegalSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    clubs: ClubsSelect<false> | ClubsSelect<true>;
    resources: ResourcesSelect<false> | ResourcesSelect<true>;
    'club-tag-categories': ClubTagCategoriesSelect<false> | ClubTagCategoriesSelect<true>;
    'resource-tag-categories': ResourceTagCategoriesSelect<false> | ResourceTagCategoriesSelect<true>;
    'club-tags': ClubTagsSelect<false> | ClubTagsSelect<true>;
    'resource-tags': ResourceTagsSelect<false> | ResourceTagsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    '/index': Index;
  };
  globalsSelect: {
    '/index': IndexSelect<false> | IndexSelect<true>;
  };
  locale: 'en' | 'fr';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  fullName: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  slug: string;
  title: string;
  seoDescription: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "legal".
 */
export interface Legal {
  id: number;
  page?: (number | null) | Page;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "clubs".
 */
export interface Club {
  id: number;
  slug: string;
  title: string;
  description: string;
  website?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  otherSocials?:
    | {
        link: string;
        id?: string | null;
      }[]
    | null;
  currentlyActive: string;
  tags?: (number | ClubTag)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "club-tags".
 */
export interface ClubTag {
  id: number;
  name: string;
  category: number | ClubTagCategory;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "club-tag-categories".
 */
export interface ClubTagCategory {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "resources".
 */
export interface Resource {
  id: number;
  slug: string;
  title: string;
  description: string;
  website?: string | null;
  insuranceDetails?: string | null;
  insuranceProviders?:
    | {
        insuranceProvider: {
          name: string;
          description?: string | null;
          id?: string | null;
        }[];
        id?: string | null;
      }[]
    | null;
  email?: string | null;
  phoneNumber?: string | null;
  location?: string | null;
  channel?: string | null;
  currentlyActive: string;
  tags?: (number | ResourceTag)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "resource-tags".
 */
export interface ResourceTag {
  id: number;
  name: string;
  category: number | ResourceTagCategory;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "resource-tag-categories".
 */
export interface ResourceTagCategory {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'legal';
        value: number | Legal;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'clubs';
        value: number | Club;
      } | null)
    | ({
        relationTo: 'resources';
        value: number | Resource;
      } | null)
    | ({
        relationTo: 'club-tag-categories';
        value: number | ClubTagCategory;
      } | null)
    | ({
        relationTo: 'resource-tag-categories';
        value: number | ResourceTagCategory;
      } | null)
    | ({
        relationTo: 'club-tags';
        value: number | ClubTag;
      } | null)
    | ({
        relationTo: 'resource-tags';
        value: number | ResourceTag;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  fullName?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  seoDescription?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "legal_select".
 */
export interface LegalSelect<T extends boolean = true> {
  page?: T;
  content?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "clubs_select".
 */
export interface ClubsSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  description?: T;
  website?: T;
  email?: T;
  phoneNumber?: T;
  facebook?: T;
  instagram?: T;
  otherSocials?:
    | T
    | {
        link?: T;
        id?: T;
      };
  currentlyActive?: T;
  tags?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "resources_select".
 */
export interface ResourcesSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  description?: T;
  website?: T;
  insuranceDetails?: T;
  insuranceProviders?:
    | T
    | {
        insuranceProvider?:
          | T
          | {
              name?: T;
              description?: T;
              id?: T;
            };
        id?: T;
      };
  email?: T;
  phoneNumber?: T;
  location?: T;
  channel?: T;
  currentlyActive?: T;
  tags?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "club-tag-categories_select".
 */
export interface ClubTagCategoriesSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "resource-tag-categories_select".
 */
export interface ResourceTagCategoriesSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "club-tags_select".
 */
export interface ClubTagsSelect<T extends boolean = true> {
  name?: T;
  category?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "resource-tags_select".
 */
export interface ResourceTagsSelect<T extends boolean = true> {
  name?: T;
  category?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "/index".
 */
export interface Index {
  id: number;
  page: number | Page;
  mobileTitle: string;
  desktopTitle: string;
  description: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "/index_select".
 */
export interface IndexSelect {
  page?: boolean;
  mobileTitle?: boolean;
  desktopTitle?: boolean;
  description?: boolean;
  updatedAt?: boolean;
  createdAt?: boolean;
  globalType?: boolean;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}