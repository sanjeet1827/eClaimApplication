FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base

WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY eClaimApp/eClaimApp.csproj eClaimApp/
RUN dotnet restore eClaimApp/eClaimApp.csproj
COPY . .
WORKDIR /src/eClaimApp
RUN dotnet build eClaimApp.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish eClaimApp.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "eClaimApp.dll"]
