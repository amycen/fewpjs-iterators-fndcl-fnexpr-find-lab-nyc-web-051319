function superbowlWin(records) {
  return records.find(function(record){return record.result==='W'}).year
}