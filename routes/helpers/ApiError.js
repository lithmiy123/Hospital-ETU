class ApiError{
    /**
     * @constructs ApiError
     * @param {number} code status code
     * @param {string} msg error message
     */
    constructor(code,msg){
        this.status = code;
        this.message = msg;
    }
    static badRequest(e){
        return new ApiError(400,e.message ||'Bad request');
    }
    static unauthorized(e){
        return new ApiError(401,e.message ||'Unauthorized');
    }
    static forbidden(e){
        return new ApiError(403, e.message || 'Forbidden');
    }
    static notfound(e){
        return new ApiError(404, e.message ||'Not found');
    }
    static unprocessableEntity(e){
        return new ApiError(422,e.message);
    }
    static serverError(e){
        return new ApiError(500,e.message ||'Internel server error');
    }
    static conflicted(e){
        return new ApiError(409 ,e.message ||'Conflicted');
    }
    static redirect(url){
        return new ApiError(301,react_url+url);
    }
    //Add more error status codes according to the requirement
}

module.exports = ApiError;