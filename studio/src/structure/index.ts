import {CogIcon, DocumentsIcon, UserIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import pluralize from 'pluralize-esm'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['settings', 'assist.instruction.context']

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Content Management')
    .items([
      // Blog Posts
      S.listItem()
        .title('Blog Posts')
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList('post')
            .title('Blog Posts')
            .filter('_type == "post"')
        ),

      // Authors
      S.listItem()
        .title('Authors')
        .icon(UserIcon)
        .child(
          S.documentTypeList('person')
            .title('Authors')
            .filter('_type == "person"')
        ),

      // Pages
      S.listItem()
        .title('Pages')
        .child(
          S.documentTypeList('page')
            .title('Pages')
            .filter('_type == "page"')
        ),

      // Site Settings
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),
    ])
