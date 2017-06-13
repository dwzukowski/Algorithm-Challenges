function isPalindrome(str){
    var i=0
    var j=str.length
    while (i < j){
        if (str[i] != str[j-1]){
            return "not a palindrome"
        }
    i++
    j--
    }
    return "Palindrome"
}