using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController : ControllerBase
{
    public TestController()
    {
    }

    [HttpGet("")]
    public ActionResult<string> Get()
    {
        return "Controller working";
    }
}