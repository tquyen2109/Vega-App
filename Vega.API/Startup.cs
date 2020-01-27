using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Vega.API.Persistence;
using Vega.API.Core;
using AutoMapper;
using Microsoft.AspNetCore.Server.IISIntegration;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;
using Vega.API.Core.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace Vega.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<PhotoSettings>(Configuration.GetSection("PhotoSettings"));
            services.AddControllers().AddNewtonsoftJson();
            services.AddScoped<IUnitOfWork,UnitOfWork>();
            services.AddScoped<IVehicleRepository,VehicleRepository>();
             services.AddScoped<IPhotoRepository,PhotoRepository>();
            services.AddAutoMapper();
            services.AddDbContext<VegaDbContext>(options => options.UseSqlite(Configuration.GetConnectionString("Default")));
            services.AddControllers();
             services.AddCors(options =>
    {
        options.AddPolicy("CorsPolicy",
            builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
    });
             services.AddMvc();
            services.AddAuthentication(IISDefaults.AuthenticationScheme);
            services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.Authority = "https://dev-0mwgdf82.auth0.com/";
            options.Audience = "https://api.vega.com";
        });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

          //  app.UseHttpsRedirection();

          app.UseRouting();
          app.UseCors("CorsPolicy");

            app.UseAuthentication();       
           app.UseAuthorization();
        

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
           
        }
    }
}
