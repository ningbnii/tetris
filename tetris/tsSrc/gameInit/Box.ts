/**
 * Created by dell on 2017/3/14.
 */
module gameInit{
    export class Box{
        public box;
        public constructor(){
            let self = this;

            let box1 = [[0,0,0,0],
                        [0,0,0,0],
                        [1,1,1,1],
                        [0,0,0,0]];

            self.box = [box1];
        }

        public getBox(){
            let self = this;
            let num = 7 * Math.random();
            let index = parseInt(num);
            let result = [];
            let colorIndex = 1 + Math.floor(Math.random() * 4);
            let i,j;
            for(i=0;i<4;i++){
                let child = [];
                for(j=0;j<4;j++){
                    child[j] = self.box[i][j] * colorIndex;
                }
                result[i] = child;
            }
            return result;
        }
    }
}