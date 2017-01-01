var responseBuild = (repStatus, repMsg, repDto) => {
  if (repStatus == false) {
    return {
      success: false,
      error: repMsg
    }
  } else {
    if (repDto instanceof Array) {
      return {
        success: repStatus,
        results: repDto
      }
    } else {
      return {
        success: repStatus,
        result: repDto
      }
    }
  }
};

module.exports = {
  responseBuild: responseBuild
}