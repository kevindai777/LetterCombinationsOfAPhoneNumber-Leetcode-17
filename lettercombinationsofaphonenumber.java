//Java Solution

class Solution {
    public List<String> letterCombinations(String digits) {
        if (digits.length() == 0) {
            return new ArrayList<>();
        }
        
        List<String> result = new ArrayList<>();
        Map<Integer, String> map = new HashMap<>();
        map.put(2, "abc");
        map.put(3, "def");
        map.put(4, "ghi");
        map.put(5, "jkl");
        map.put(6, "mno");
        map.put(7, "pqrs");
        map.put(8, "tuv");
        map.put(9, "wxyz");
        List<String> data = new ArrayList<>();
        for (char digit : digits.toCharArray()) {
            data.add(map.get(Character.getNumericValue(digit)));
        }
        
        StringBuilder sb = new StringBuilder();
        backtrack(sb, result, data, 0, digits.length());
        return result;
    }
    
    public void backtrack(StringBuilder temp, List<String> result, List<String> data, int curLev, int endLev) {
        if (temp.length() == endLev) {
            result.add(temp.toString());
            return;
        }
        
        for (int i = 0; i < data.get(curLev).length(); i++) {
            temp.append(data.get(curLev).substring(i, i + 1));
            backtrack(temp, result, data, curLev + 1, endLev);
            temp.deleteCharAt(temp.length() - 1);
        }
    }
}