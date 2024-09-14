FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY WebApplication2.csproj WebApplication2.csproj
RUN dotnet restore WebApplication2.csproj
COPY . .
WORKDIR /src
RUN dotnet build WebApplication2.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish WebApplication2.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "WebApplication2.dll"]