function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      if (dp[start] && wordSet.has(s.substring(start, end))) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
