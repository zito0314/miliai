import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error Local API helper is shared with the JavaScript serverless route.
import { savePblProjectPlan } from './api/save-pbl-project.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-pbl-project-list-api',
      configureServer(server) {
        server.middlewares.use('/api/save-pbl-project', async (request, response) => {
          if (request.method !== 'POST') {
            response.statusCode = 405
            response.setHeader('Allow', 'POST')
            response.setHeader('Content-Type', 'application/json; charset=utf-8')
            response.end(JSON.stringify({ error: 'POST 요청만 사용할 수 있습니다.' }))
            return
          }

          try {
            const body = await readJsonBody(request)
            const result = await savePblProjectPlan(body?.plan, body?.difficulty)
            response.statusCode = 200
            response.setHeader('Content-Type', 'application/json; charset=utf-8')
            response.end(JSON.stringify(result))
          } catch (error) {
            response.statusCode = 400
            response.setHeader('Content-Type', 'application/json; charset=utf-8')
            response.end(JSON.stringify({
              error: error instanceof Error ? error.message : 'PBL 콘텐츠를 저장하지 못했습니다.',
            }))
          }
        })
      },
    },
  ],
})

function readJsonBody(request: import('node:http').IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    let body = ''
    request.setEncoding('utf8')
    request.on('data', (chunk) => {
      body += chunk
    })
    request.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {})
      } catch (error) {
        reject(error)
      }
    })
    request.on('error', reject)
  })
}
