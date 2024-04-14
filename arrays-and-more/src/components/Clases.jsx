import React from 'react'

export const Clases = () => {

  class Main {
    constructor(content = [])
    {
      this.main = [...content];
    }
    pop()
    {
      const value = this.main[0];
      this.main.splice(0, 1);
      return value;
    }
  }

  class Team extends Main {
    main()
    {
      return this.main[0];
    }
  }

  const myTeam = new Team();
  myTeam.push('Barcelona');

  class Height {
    jump()
    {
      this.jumping = true;
      return this;
    }

    setHeight(height)
    {
      this.height = height;
      return this;
    }
  }

  const newHei = new Height();
  newHei.setHeight(180);

  class Scoring extends Height {
    constructor(...height)
    {
      super(...height)
      this.scoring = 21;
    }
  }

  const theScore = new Scoring();
  console.log(theScore);

  class Number {
    bar() { return: 1; }
  }

  const num = new Number();
  console.log(num);

  class secondNumber extends Number {
    // con this
    bar()
    {
      console.log(this.bar);
    }

    // con constructor
    constructor()
    {
      // ...
    }
  }

  const secNum = new secondNumber();
  console.log(secNum);

  // extra class
  class Jere {
    constructor(stack = {
      frontend: 'HTML-CSS-JS-TS-REACT-BOOTSTRAP-ANG-JQUERY',
      backend: 'NODEJS-EXPRESS-MONGODB-PHP-MYSQL'
    })
    {
      this.stack = stack.frontend && stack.backend || 'nothing';
      console.log(stack);
    }

    getStack() {
      return this.stack;
    }

    toString() {
      return `Jere usually use - ${this.getStack()}`;
    }
  }

  return (
    <div className="clases__container">

    </div>
  )
  
}
