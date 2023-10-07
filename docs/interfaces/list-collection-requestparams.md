# ListCollectionsRequestParams

| name | type | optional | default | description |
| - | - | - | - | - |
| filter | **[`ListCollectionsFilter`](/docs/interfaces/list-collection-filter)** | `true` | `n/a` | Collection filters param |
| page | `number` | `true` | `n/a` | Page (if you need to paginate the datas) |
| limit | `number` | `true` | `n/a` | Limit of each pages (if you need to paginate the datas) |
| sort | `ListCollectionsSort[]` | `true` | `n/a` | Sort options for HYPR Standardize sort |
| includes | `string[]` | `true` | `n/a` | HYPR Standardize includes params |
| search | `string` | `true` | `n/a` | Search query |

## ListCollectionSort

```typescript
export type ListCollectionsSort = `totalVolume:${SortCriteria}` | `createdAt:${SortCriteria}`;
```

where `SortCriteria` is

```typescript
export type SortCriteria = 'ASC' | 'DESC';
```
