// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import recipe from './documents/recipe';
import ingredient from './documents/ingredient';
import recipeIngredient from './objects/recipeIngredient';

// Object types
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';

// Landing page sections
import imageSection from './objects/imageSection';
import textSection from './objects/textSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    embedHTML,
    figure,
    imageSection,
    ingredient,
    internalLink,
    link,
    portableText,
    recipe,
    recipeIngredient,
    simplePortableText,
    textSection,
  ]),
});
