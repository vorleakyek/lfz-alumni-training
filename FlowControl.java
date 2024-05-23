class FlowControl {
    public int maximumWealth(int[][] accounts) {

        int numRow = accounts.length;
        int numCol = accounts[0].length;
        int max = 0;

        for(int i=0; i < numRow; i++) {
            int sum =0;
            for(int j=0; j < numCol; j++) {
                sum += accounts[i][j];
            }
            
            if(sum > max) {
                max = sum;
            }
        }

        return max;
    }
}
