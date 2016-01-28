'use strict';

//describe('test suite', () => {
  //it('true should be true', () => {
    //expect(true).to.be.true;
  //});
//});



const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
     const goal = execSync('cal').toString();
     const output = execSync('./cal.js').toString();{
     expect(output).to.equal(goal);
    });
  });

  describe("Zeller's congruence", () => {
    const zellers = require('../lib/zeller.js');

    describe('.modifiedMonth', () => {
        it('return 13 for January', () => {
         const goal = execSync('cal').toString();
         const output = execSync('./cal.js 2016 1').toString();
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
        it('return 14 for February', () => {
          const goal = execSync('cal').toString();
          const output = execSync('./cal.js 2016 2').toString();
        expect(zellers.modifiedMonth(2)).to.equal(14);
      // 2 === 14
       });
         it('return 3 for March', () => {
           const goal = execSync('cal').toString();
           const output = execSync('./cal.js 2016 3').toString();
        expect(zellers.modifiedMonth(3)).to.equal(3);
      // 3 === 3
        });
     });
    describe('.modifiedYear', () => {
        it('returns 2014 for Jan 2015', () => {
           const goal = execSync('cal').toString();
           const output = execSync('./cal.js 2015 1').toString();
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
        });
        it('returns 2015 for Feb 2015', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2016 2').toString();
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
       });
        // 2016, 2 === 2015

         it('returns 2017 for March 2017', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2017 3').toString();
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
         });
      });
         // 2017, 3 === 2017
    describe('.getDay', () => {
         it('returns 2 (Tuesday) for March 1, 2016', () => {
             const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2016 3').toString();
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });
      it('returns 3 (Wed) for March 1, 2000', () => {
             const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2000 3').toString();
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
       });
      // 2000, 3, 1 === 3
       it('returns 1 (Mon) for March 2, 2200', () => {
             const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2200 3').toString();
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
         });
      // 2100, 3, 1 === 1 day of the week
       it('returns 0 (Sun) for March 2, 2200', () => {
             const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2200 3').toString();
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
         });
      // 2200, 3, 2 === 0
        it('returns 4 (Thur) for March 2, 2200', () => {
             const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2200 3').toString();
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
         });
       });
         // 2300, 3, 1 === 4

//NEED TO WRITE CODE ON THESE TESTS

       //describe('.center', () => {
        //it('should handle January', () => {
       //expect(center('January 2016', () => {
         //});
        //});
        //it('should handle February 2016', () => {
          //expect(center('February 2016', () =>{
          //});
        //});
      //});
        //this is to test centering of the month and year

        describe('.getSixWeek', () => {
           const month = require('../lib/month.js');
          it('return 6 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getSixWeek(2016, 1)).to.equal(6);
          });
           it('return 6 week month', () => {
             const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2200 3').toString();
            expect(month.getSixWeek(2016, 10)).to.equal(6);
          });
          it('return 6 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getSixWeek(2016, 10)).to.equal(4);
          });
          it('return 6 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getSixWeek(2016, 1)).to.equal(4);
          });
        });
        //this tests for 6 week month

        describe('.getFiveWeek', () => {
          const month = require('../lib/month.js');
          it('return 5 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getFiveWeek(2016, 3)).to.equal(5);
          });
          it('return 5 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getFiveWeek(2016, 4)).to.equal(5);
          });
          it('return 5 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getFiveWeek(2016, 3)).to.equal(4);
          });
          it('return 5 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getFiveWeek(2016, 4)).to.equal(4);
          });
          //this tests for 5 week month

        describe('.getFourWeek', () => {
          const month = require('../lib/month.js');
          it('return 4 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getFourWeek(2015, 2)).to.equal(4);
          });
          it('return 4 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getFourWeek(2009, 2)).to.equal(4);
          });
          it('return 4 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getFourWeek(2015, 2)).to.equal(5);
          });
          it('return 4 week month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getFourWeek(2015, 2)).to.equal(5);
          });
          //this tests for 4 week month

        describe('.getThirtyDay', () => {
          const month = require('../lib/month.js');
          it('return 30 day month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getThirtyDay(2016, 4, 30)).to.equal(30);
          });
          it('return 30 day month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();
            expect(month.getThirtyDay(2016, 6, 30)).to.equal(30);
          });
          it('return 30 day month', () => {
            const goal = execSync('cal').toString();
            const output = execSync('./cal.js 2200 3').toString();

            expect(month.getThirtyDay(2016, 4, 30)).to.equal(31);
          });
          it('return 30 day month', () => {
            const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2200 3').toString();

            expect(month.getThirtyDay(2016, 6, 30)).to.equal(31);
          });
          //this tests for 30 day month

        describe('.getThirtyOne', () => {
          const month = require('../lib/month.js');
          it('return 31 day month', () => {
            const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2200 3').toString();

            expect(month.getThirtyOne(2016, 7, 31)).to.equal(31);
          });
          it('return 31 day month', () => {
            const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2200 3').toString();

            expect(month.getThirtyOne(2016, 8, 31)).to.equal(31);
          });
          it('return 31 day month', () => {
            const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2200 3').toString();

            expect(month.getThirtyOne(2016, 7, 31)).to.equal(30);
          });
          it('return 31 day month', () => {
            const goal = execSync('cal').toString();
             const output = execSync('./cal.js 2200 3').toString();

            expect(month.getThirtyOne(2016, 8, 31)).to.equal(30);
          });
          //this tests for 31 day month

       var should = require('chai').should(),






  });
});//end of cal

//set up year.js
//set up arrays for month month.js
//pull month and year and day to inject into cli
//need test case for
//6 week month test done need code
//5 week month test done need code
//4 week month test done need code
//30 day month test done need code
//31 day month test done need code
//leap year
//non leap year
//integration testing and unit testing(inside the code)
//1753 minimum year working to 9999
