function receivesAFunction (cb) {
    cb();
}

const returnsANamedFunction = () => function namedFunction(){};

const returnsAnAnonymousFunction = () => function(){};

