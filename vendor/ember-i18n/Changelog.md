## 2.0.0 2014-05-28

 * Drop support for Ember 0.x.

## v1.6.4 2014-05-27

 * Use `Ember.Handlebars`, not `Handlebars` for helper management
 * The default `compileTemplate` throws an `Ember.Error` if the full
   `Ember.Handlebars` is not available
 * Check `view.$()` instead of `view.state` as Ember is deprecating the
   latter in favor in favor of `view._state`, but doesn't consider either
   to be part of the public API.
 * Convert `Em` to `Ember` for consistency

## v1.6.3 2014-02-19

 * relax CLDR and Handlebars dependencies via the `^` operator

## v1.6.2 2014-02-19

 * relax Ember dependency to ">0.9.7 <2"

## v1.6.1 2014-02-09

 * relax jQuery dependency to ">=1.7 <3"

## v1.6.0 2014-02-06

 * Add `Ember.I18n.on`
 * Emit `missing` events when translation missin
 * Add `{{ta}}` helper as shorthand for `{{translateAttr}}`
 * `TranslateableProperties` observes when the translation key changes
 * Use the `afterRender` queue if available (Ember 1+)
 * Expose `Ember.I18n.eachTranslatedAttribute`

## v1.5.0 2013-07-30

 * Add Ember warning if missing translation
 * Add `I18n.exists(key)`
 * Avoid calling `compile` for missing translations

## v1.4.1 2013-06-25

 * Don't rely on `Ember.uuid`, but use it if Ember defines it

## v1.4.0 2013-06-04

 * No more CoffeeScript
 * Use `Ember.uuid` instead of `jQuery.uuid`
 * Change license to APLv2
 * Dotted-style keys win over nested-style keys
 * Add `TranslateableProperties` mixin

## v1.3.2 2013-01-09

 * Support use with `jQuery.noconflict`

## v1.3.1 2013-01-03

 * Support defining translations in nested objects
 * Prefer `Ember.assert` to `ember_assert`
 * Add Bower support
 * Use `Ember.Handlebars.get` instead of `getPath` if on Ember 1

## v1.3.0 2012-04-20

 * Remove all references to `Sproutcore` and `SC`
 * Use correct context for `getPath` when getting the value of a bound attribute

## v1.2.0 2012-02-14

 * Add inflection support via CLDR.js

## v1.1.0 2012-01-24

 * Use MIT license
 * Make `I18n` available in the `Ember` namespace
 * Use `Ember`, not `Sproutcore`

## v1.0.0 2011-09-29

Initial version
