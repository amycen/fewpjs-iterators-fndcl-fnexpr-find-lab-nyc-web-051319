function superbowlWin(records) {
  let found_record = records.find(function(record){return record.result==='W'})
  found_record? return found_record.year : return found_record
}