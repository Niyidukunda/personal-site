# Portfolio Restore Points

## How to Use Restore Points

### Method 1: File Backup Restore
```powershell
# To restore from file backup v1 (latest working version)
Copy-Item -Path "src/app/page-reference-v1.tsx" -Destination "src/app/page.tsx" -Force
```

### Method 2: Git Restore
```powershell
# To restore from Git commit (more reliable)
git checkout e499bbe -- src/app/page.tsx
```

## Restore Point History

### v1 - Complete Portfolio (September 27, 2025)
- **Git Commit:** `e499bbe`
- **File Backup:** `src/app/page-reference-v1.tsx`
- **Features:**
  - ✅ Blue/emerald color scheme (no orange/red)
  - ✅ Del IT+Web logo in header (80px)
  - ✅ Larger "Powered by" logos (64px body, 96px footer)
  - ✅ Social media icons in header
  - ✅ Professional certifications section (CompTIA A+, N+, Sec+, CCNA, KCNA)
  - ✅ React Icons library for security
  - ✅ Transparent logo backgrounds
  - ✅ No FN initials

### Previous Versions
- **Clean Backup:** `src/app/page-clean.tsx` (original working version)
- **Generic Backup:** `src/app/page-backup.tsx` (older version)

## Emergency Recovery Commands

If the current page.tsx gets corrupted:

```powershell
# Quick restore from latest backup
Copy-Item -Path "src/app/page-reference-v1.tsx" -Destination "src/app/page.tsx" -Force

# Or restore from Git (recommended)
git checkout e499bbe -- src/app/page.tsx
```