# Docker Testing Guide for PMHR Hall of Fame

## Prerequisites
- Docker installed on your system
- The project with the Dockerfile in the root directory

## Step 1: Build the Docker Image

```bash
# Navigate to your project directory
cd /path/to/pmhr-hall-of-fame

# Build the Docker image
docker build -t pmhr-hall-of-fame .
```

This will:
- Create a multi-stage build
- Install dependencies in the build stage
- Build the Next.js application
- Create a production image with only necessary files

## Step 2: Run the Container

```bash
# Run the container
docker run -p 3000:3000 pmhr-hall-of-fame
```

Or run in detached mode (background):
```bash
docker run -d -p 3000:3000 --name pmhr-app pmhr-hall-of-fame
```

## Step 3: Test the Application

1. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

2. **Test key functionality:**
   - Homepage loads with runner cards
   - Navigate to individual runner profiles: `http://localhost:3000/runners/1`
   - Check that images load properly
   - Test responsive design on different screen sizes
   - Verify table view toggle works
   - Check that 404 pages work for non-existent runners

## Step 4: Monitor and Debug

### View container logs:
```bash
# If running in detached mode
docker logs pmhr-app

# Follow logs in real-time
docker logs -f pmhr-app
```

### Check container status:
```bash
docker ps
```

### Execute commands inside the container:
```bash
docker exec -it pmhr-app sh
```

## Step 5: Stop and Clean Up

```bash
# Stop the container
docker stop pmhr-app

# Remove the container
docker rm pmhr-app

# Remove the image (if needed)
docker rmi pmhr-hall-of-fame
```

## Advanced Testing

### Test with Environment Variables
```bash
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  pmhr-hall-of-fame
```

### Test with Volume Mounting (for development)
```bash
docker run -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  pmhr-hall-of-fame
```

### Performance Testing
```bash
# Check image size
docker images pmhr-hall-of-fame

# Check container resource usage
docker stats pmhr-app
```

## Troubleshooting

### Common Issues:

1. **Build fails**: Check that all dependencies are in package.json
2. **Images don't load**: Verify next.config.js is copied correctly
3. **404 on refresh**: Ensure Next.js static export settings are correct
4. **Port conflicts**: Use different port mapping: `-p 8080:3000`

### Debug build process:
```bash
# Build with verbose output
docker build --progress=plain --no-cache -t pmhr-hall-of-fame .

# Check intermediate layers
docker build --target builder -t pmhr-debug .
docker run -it pmhr-debug sh
```

## Production Deployment

For production deployment, consider:

1. **Use a reverse proxy** (nginx) in front of the container
2. **Set up health checks**:
   ```dockerfile
   HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
     CMD curl -f http://localhost:3000/api/health || exit 1
   ```
3. **Use multi-stage builds** for smaller image size (already implemented)
4. **Set proper security contexts** and non-root users
5. **Configure proper logging** and monitoring

## Docker Compose (Optional)

Create a `docker-compose.yml` for easier management:

```yaml
version: '3.8'
services:
  pmhr-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```