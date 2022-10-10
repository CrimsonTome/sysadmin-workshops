# sysadmin-workshops

> slides for workshops on teaching sysadmin skills to students at the University of Hull

## System requirements

- [Node.js](https://nodejs.org/en/)
- [Pandoc](https://github.com/jgm/pandoc)

## Development

- edit slides in `src/raw-slides/*.md`

## Building

### Node

- `npm run build`

Or if you are in the repo root: 

- `node .` 

#### Successful build
```
> sysadmin-workshops@1.0.0 build
> node src/lib/build.mjs

true
```

#### Unsuccessful build
```
... 
Oh Nos:  Error: ../../output/slides.pptx: openBinaryFile: does not exist (No such file or directory)
...
```

## License

sysadmin-workshops is licensed under the Apache 2.0 license. The full license text is included in the [LICENSE](LICENSE.md) file in this repository. Tldr legal have a [great summary](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)) of the license if you're interested.
