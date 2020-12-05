# Gatsby bug repro

This repo shows the problem https://github.com/gatsbyjs/gatsby/issues/28474 where
having broken images will not produce meaningful output.

To repro do the following

```bash
yarn install
yarn clean
yarn develop
```

### Expected

You should get a meaningful error message that the images are broken

### Actual

```

error [object Object] Input file contains unsupported image format


  Error: Input file contains unsupported image format

error [object Object] Input file contains unsupported image format


  Error: Input file contains unsupported image format

error There was an error in your GraphQL query:

Cannot return null for non-nullable field ImageSharpFluid.aspectRatio.
```

Note that the error message do not include the file/path of the broken images.
