using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace ActionResultTDemo
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController
    {
        //[HttpGet]
        //public ActionResult<ICollection<NoteApiModel>> Get()
        //{
        //    if (DateTime.UtcNow != DateTime.UtcNow.AddDays(1))
        //        return new NotFoundResult();

        //    return new List<NoteApiModel>() {
        //        new NoteApiModel()
        //        {
        //            NoteId = 1,
        //            Body = "ActionResult<T> Demo"
        //        }
        //    };
        //}

        [HttpGet]
        public ActionResult Get()
        {
            if (DateTime.UtcNow != DateTime.UtcNow.AddDays(1))
                return new NotFoundResult();

            return new OkObjectResult(new List<NoteApiModel>() {
                new NoteApiModel()
                {
                    NoteId = 1,
                    Body = "ActionResult<T> Demo"
                }
            });
        }
    }
}
